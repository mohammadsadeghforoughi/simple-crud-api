Simple Crud API Documentation

---

## Create Storage

Base URL: `/create_storage`  
Method: POST  
Request:

```
{
"id":"ID of new storage"
}
```

Response:

Success:

```
{
    "message": "storage created successfully"
}
```

Faied:

```
{
    "message": "cannot create storage with id of 09120059982; storge alredy exist"
}
```

---

## Get data

Base URL: `/storage`  
Method: GET

### Note: you should add id of your storage to `Authorization` header.

Response:

Success:

```
{
    "data": []
}
```

Faied:

```
{
    "message": "Storage not found"
}
```

---

## Add data

Base URL: `/storage`  
Method: POST

### Note: you should add id of your storage to `Authorization` header.

Request:

```
{
    "data":{
        "name": "salam",
        "id":"123"
    }
}
```

Response:

Success:

```
{
    "message": "data added successfully"
}
```

Faied:

```
{
    "message": "Storage not found"
}
```

---

## Update data

Base URL: `/storage`  
Method: PATCH

### Note: you should add id of your storage to `Authorization` header.

Request:

```
{
    "id":"123",
     "UpdateData":
         {
            "name":"salam2", "family": "samali"
         }
}
```

Response:

Success:

```
{
    "message": "data updated successfully"
}
```

Faied:

```
{
    "message": "Storage not found"
}
```

---

## Delete data

Base URL: `/storage`  
Method: DELETE

### Note: you should add id of your storage to `Authorization` header.

Request:

```
{
    "id":"123",
}
```

Response:

Success:

```
{
    "message": "data deleted successfully"
}
```

Faied:

```
{
    "message": "Storage not found"
}
```
