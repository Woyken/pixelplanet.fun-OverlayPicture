// tableNames: string[], mode: IDBTransactionMode
function executeDbOperation(operation: (db: IDBDatabase) => void) {
    const dbOpenRequest = indexedDB.open('OverlayDb', 1);

    dbOpenRequest.onupgradeneeded = () => {
        const db = dbOpenRequest.result;
        if (!db.objectStoreNames.contains('InputFiles')) {
            const objectStore = db.createObjectStore('InputFiles', { keyPath: 'id', autoIncrement: true });
            // objectStore.createIndex('manualSortIndex', 'manualSortId', { unique: true });
        }
    };
    dbOpenRequest.onsuccess = () => {
        const db = dbOpenRequest.result;
        operation(db);
        // const trx = db.transaction('InputFiles', 'readonly');
        // const trx = db.transaction(tableNames, mode);

        // trx.oncomplete = () => {
        // db.close();
        // };
    };
}

function executeDbOperationTrx(tableNames: string[], mode: IDBTransactionMode, operation: (trx: IDBTransaction) => Promise<void>) {
    executeDbOperation((db) => {
        const trx = db.transaction(tableNames, mode);

        operation(trx).catch(console.error);

        trx.oncomplete = () => {
            db.close();
        };
        trx.onabort = () => {
            console.log('Transaction abort', trx.error);
            db.close();
        };
        trx.onerror = () => {
            console.log('Transaction error', trx.error);
            db.close();
        };
    });
}

interface ReadInputFileEntity extends WriteInputFileEntity {
    id: number;
}

interface WriteInputFileEntity {
    inputImage: string | File;
    placement: {
        x: number;
        y: number;
    };
    modifiers: {
        brightness: number;
    };
    name: string;
    // manualSortId: number;
}

export function dbAddFile(fileWriteData: WriteInputFileEntity) {
    return new Promise<number>((resolve, reject) => {
        executeDbOperationTrx(['InputFiles'], 'readwrite', async (trx) => {
            const inputFilesStore = trx.objectStore('InputFiles');
            const addRequest = inputFilesStore.add(fileWriteData);
            addRequest.onsuccess = () => {
                console.log('TODO Added file request success', addRequest);
                resolve(addRequest.result as number);
            };
        });
    });
}

export function dbUpdateFile(entityId: number, fileWriteData: WriteInputFileEntity) {
    return new Promise<void>((resolve, reject) => {
        executeDbOperationTrx(['InputFiles'], 'readwrite', async (trx) => {
            const inputFilesStore = trx.objectStore('InputFiles');
            const putRequest = inputFilesStore.put(fileWriteData, entityId);
            putRequest.onsuccess = () => {
                console.log('TODO Updated file request success', putRequest);
                resolve();
            };
        });
    });
}

export function dbGetAllFiles() {
    return new Promise<ReadInputFileEntity[]>((resolve, reject) => {
        executeDbOperationTrx(['InputFiles'], 'readonly', async (trx) => {
            const inputFilesStore = trx.objectStore('InputFiles');
            const getAllRequest = inputFilesStore.getAll() as IDBRequest<ReadInputFileEntity[]>;
            getAllRequest.onsuccess = () => {
                console.log('TODO get all files request success', getAllRequest);
                resolve(getAllRequest.result);
            };

            //

            // Iterate cursor
            // const cursorRequest = inputFilesStore.index('manualSortIndex').openCursor(null, 'prev');
            // cursorRequest.onsuccess = () => {
            //     const cursor = cursorRequest.result;
            //     if (cursor) {
            //         const file = cursor.value as InputFileEntity;
            //     }
            // }
        });
    });
}

export function dbDeleteFile(id: number) {
    return new Promise<void>((resolve, reject) => {
        executeDbOperationTrx(['InputFiles'], 'readwrite', async (trx) => {
            const inputFilesStore = trx.objectStore('InputFiles');
            const deleteRequest = inputFilesStore.delete(id);
            deleteRequest.onsuccess = () => {
                console.log('TODO delete file request success', deleteRequest);
                resolve(deleteRequest.result);
            };
        });
    });
}
