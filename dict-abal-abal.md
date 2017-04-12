## Kamus abal abal

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
cara mengaksesnya this.refs.name.value
