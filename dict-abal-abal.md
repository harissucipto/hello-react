## Kamus abal abal
---
**cara bikin server:**

* ini dulu npm
```npm init```

* misalnya pakai express versi 4 lalu diembedkan (--save) ke pengaturan packge.json dengan perintah ini
```npm install express@4 --save ```

* sisanya liat source code

---
dalam jsx kode javascript di wrap dengan tanda {kode javascript}
---
**props** adalah properti data yang kita passing lewat attribut pada element
sebuah react element dimana kita bisa mengakses lewat object this.props.namaAttribut
dan bisa digunakan melalui jsx dengan wrap nama variablenya dengan tanda {}


* passing props name :

```jsx
<Greater name="Haris"/>
```

* ambil data simpan ke variable dulu:
```jsx
var name = this.props.name;
```

* lalu gunakan variable tadi ke jsx
```jsx
  <h1>Hello {name}!</h1>
```

----
**default props** jika props sudah dijabarkan tapi tidak ada data yang dipassing
dan kita mau ada nilai awal maka pakai ini misalnya:

```jsx
getDefaultProps: function() { // default props jika tidak ada passsing data maka pakai ini nilai defaultnya
  return {
    name: 'React'
  }
},
```


----
**e.preventDefault()**
mencegah reload semua ulang ketika event di klik berguna bagi spa.

**onSubmit={this.namaEventYangDipanggil}**
event yang berguna buat ketika tombol disubmit

**ref="namaAttribut"**
attribut pada input yang berguna agar bisa dibaca react contohnya baca value
cara mengaksesnya ```this.refs.name.value```


---
**state**
dua tipe data dalam komponen yaitu :

1. props (seperti penjelasan sebelumnya yakni passing data bisa menentukan default data juga)
2. state (merupakan data yang di maintain secara internal langsung oleh komponent
dan bisa diupdate melalui komponent )


**merubah data state saat  event dijalankan bisa pakai ini**
```js
this.setState({
  name: name // contoh
});
```

---
**hal penting ketika membuat nested component yaitu**:
1. Presentation component lebih baik tidak menghandle State
Karena PC bergantung pada parent (Contener component)yang akan menghandle nya
2. Contener component maintaint sebuah state
