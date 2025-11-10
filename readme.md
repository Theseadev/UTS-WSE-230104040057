# UTS Web Service Engineering -- RESTful API (Articles)

## 📌 Deskripsi Project

Project ini merupakan implementasi RESTful API menggunakan **Node.js +
Express.js** sesuai ketentuan UTS Web Service Engineering. Resource yang
digunakan adalah:

-   **Resource:** `articles`
-   **Fields wajib:** `title`, `author`, `content`

API mendukung operasi CRUD lengkap, validasi input, error handling, dan
menerapkan 7 prinsip RESTful API.

------------------------------------------------------------------------

## 📁 Struktur Folder

    UTS-WSE-NIM/
    │── app.js
    │── package.json
    │── data/
    │     └── articles.json
    │
    ├── controllers/
    │     └── articlesController.js
    │
    ├── routes/
    │     └── articlesRoutes.js
    │
    └── utils/
          └── response.js

------------------------------------------------------------------------

## 🚀 Cara Menjalankan

1.  Install dependencies:

```{=html}
<!-- -->
```
    npm install

2.  Jalankan server:

```{=html}
<!-- -->
```
    npm run dev

3.  Server berjalan di:

```{=html}
<!-- -->
```
    http://localhost:3000

------------------------------------------------------------------------

## 📚 **Endpoint RESTful API**

### ✅ **Tabel Endpoint CRUD**

  Method   Endpoint              Deskripsi                      Status Code
  -------- --------------------- ------------------------------ -----------------
  GET      `/api/articles`       Ambil semua artikel            200
  GET      `/api/articles/:id`   Ambil artikel berdasarkan ID   200 / 404
  POST     `/api/articles`       Tambah artikel baru            201 / 400
  PUT      `/api/articles/:id`   Update artikel                 200 / 400 / 404
  DELETE   `/api/articles/:id`   Hapus artikel                  204 / 404
  GET      `/api/info`           Informasi API                  200

------------------------------------------------------------------------

## ✅ Contoh JSON Body

### **POST /api/articles**

``` json
{
  "title": "Node.js Dasar",
  "author": "Fahrul Bahri",
  "content": "Artikel tentang dasar-dasar Node.js."
}
```

### **PUT /api/articles/:id**

``` json
{
  "title": "Artikel Updated",
  "author": "Fahrul",
  "content": "Konten baru setelah update."
}
```

------------------------------------------------------------------------

## ✅ 7 Prinsip RESTful API yang Diterapkan

1.  **Resource-Oriented URI** -- menggunakan `/api/articles`.
2.  **Proper HTTP Methods** -- GET, POST, PUT, DELETE.
3.  **Stateless** -- server tidak menyimpan session.
4.  **Consistent Status Codes** -- 200, 201, 204, 400, 404.
5.  **JSON Representation** -- seluruh response menggunakan JSON.
6.  **Validation & Error Handling** -- validasi field wajib.
7.  **Discoverability** -- endpoint `/api/info` tersedia.

------------------------------------------------------------------------

## ✅ Screenshots Pengujian (Wajib)

Upload screenshot Postman untuk 5 endpoint berikut:

1.  GET all articles\
2.  GET article by ID\
3.  POST create article\
4.  PUT update article\
5.  DELETE article

------------------------------------------------------------------------

## 👤 Identitas

**Nama:** Muhammad Fahrul Bahri\
**Mata Kuliah:** Web Service Engineering\
**Dosen:** Muhayat, S.Ag, M.IT

------------------------------------------------------------------------
