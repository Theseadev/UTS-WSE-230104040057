# UTS Web Service Engineering — RESTful API (Articles)

## 👤 Identitas
**Nama:** Muhammad Fahrul Bahri  
**NIM:** 230104040057  
**Kelas:** TI23B  
**Mata Kuliah:** Web Service Engineering  
**Dosen:** Muhayat, S.Ag, M.IT  

---

## 📌 Deskripsi Project
Project ini merupakan implementasi RESTful API menggunakan **Node.js + Express.js** dengan fokus pada resource:

- **Resource:** `articles`
- **Field wajib:** `title`, `author`, `content`

API ini telah mendukung:  
✅ CRUD lengkap  
✅ Validasi input  
✅ Error handling  
✅ Penerapan 7 prinsip RESTful API  

---

## 📁 Struktur Folder
```
UTS-WSE-230104040057/
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
```

---

## 🚀 Cara Menjalankan

1. Install dependency:
```
npm install
```

2. Jalankan server:
```
npm run dev
```

3. Akses API:
```
http://localhost:3000
```

---

## 📚 Tabel Endpoint RESTful API

| Method | Endpoint             | Deskripsi                | Status          |
|--------|----------------------|--------------------------|-----------------|
| GET    | /api/articles        | Ambil semua artikel      | 200             |
| GET    | /api/articles/:id    | Ambil artikel by ID      | 200 / 404       |
| POST   | /api/articles        | Tambah artikel baru      | 201 / 400       |
| PUT    | /api/articles/:id    | Update full artikel      | 200 / 400 / 404 |
| PATCH  | /api/articles/:id    | Update sebagian artikel  | 200 / 404       |
| DELETE | /api/articles/:id    | Hapus artikel            | 204 / 404       |
| GET    | /api/info            | Cek status API           | 200             |

---

## ✅ Contoh JSON Body

### POST /api/articles
```json
{
  "title": "Node.js Dasar",
  "author": "Fahrul Bahri",
  "content": "Artikel tentang dasar-dasar Node.js."
}
```

### PUT /api/articles/:id
```json
{
  "title": "Artikel Updated",
  "author": "Fahrul",
  "content": "Konten baru setelah update."
}
```

---

## ✅ 7 Prinsip RESTful API

1. **Resource-Oriented URI** — `/api/articles`
2. **Proper HTTP Methods** — GET, POST, PUT, DELETE, PATCH
3. **Stateless** — server tidak menyimpan session client
4. **Consistent Status Codes** — 200, 201, 204, 400, 404
5. **JSON Representation** — request & response berbentuk JSON
6. **Validation & Error Handling** — pengecekan field wajib
7. **Discoverability** — endpoint `/api/info` sebagai metadata API

---

## 📷 Screenshots Pengujian (Wajib)
Tambahkan screenshot Postman bagian berikut:

1. GET all articles  
2. GET article by ID  
3. POST create article  
4. PUT update article  
5. DELETE article  

---

