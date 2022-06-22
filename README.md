# mmkv-hooks-instance

Bug reproduction :

1. Set the data
2. Toggle the storage -> data with storage is not undefined (keep the previous instance value
3. Try to clear the instance -> does not clean properly the data with storage
