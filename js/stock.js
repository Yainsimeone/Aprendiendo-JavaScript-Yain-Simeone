//* Función constructura.

class Producto {
    constructor(
        nombre,
        id,
        categoria,
        precio,
        stock,
        imagen,
        cantidadEnCarrito
    ) {
        this.nombre = nombre;
        this.id = id;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.cantidadEnCarrito = cantidadEnCarrito;
    }
}

//* stock de productos.

const Celular1 = new Producto(
    'Samsung A03',
    1,
    'Samsung',
    5499,
    1,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular2 = new Producto(
    'samsung A05',
    2,
    'Samsung',
    5399,
    30,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular3 = new Producto(
    'Iphone X',
    3,
    'Iphone',
    '100.000',
    0,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular4 = new Producto(
    'Iphone 11',
    4,
    'Iphone',
    '150.000',
    4,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular5 = new Producto(
    'Samsung A09',
    5,
    'Samsung',
    55499,
    8,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular6 = new Producto(
    'Samsung A13',
    6,
    'Samsung',
    65499,
    2,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular7 = new Producto(
    'Motorola e40',
    7,
    'Motorola',
    80000,
    0,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular8 = new Producto(
    'Motorola e20',
    8,
    'Motorola',
    95000,
    3,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular9 = new Producto(
    'Iphone 8',
    9,
    'Iphone',
    90000,
    4,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular10 = new Producto(
    'Acatel 5h',
    10,
    'Acatel',
    12499,
    10,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular11 = new Producto(
    'Iphone 11 PRO',
    11,
    'Iphone',
    '165.499',
    6,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular12 = new Producto(
    'Motorola g22',
    12,
    'Motorola',
    85499,
    7,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular13 = new Producto(
    'Samsung A53',
    13,
    'Samsung',
    1099,
    5,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular14 = new Producto(
    'Xiaomi redmi 9A',
    14,
    'Xiaomi',
    75499,
    10,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular15 = new Producto(
    'Motorola moto E32',
    15,
    'Motorola',
    95499,
    9,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular16 = new Producto(
    'Samsung Galaxy S22',
    16,
    'Samsung',
    '150.499',
    6,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular17 = new Producto(
    'IPhone 13',
    17,
    'Iphone',
    '205.499',
    12,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular18 = new Producto(
    'Xiaomi 12 Pro',
    18,
    'Xiaomi',
    99499,
    11,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular19 = new Producto(
    'Xiaomi Mi 11T Pro',
    19,
    'Xiaomi',
    95499,
    3,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular20 = new Producto(
    ' IPhone 12',
    20,
    'Iphone',
    '215.499',
    9,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular21 = new Producto(
    'Nokia XR20',
    21,
    'Nokia',
    6499,
    15,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular22 = new Producto(
    'Alcatel 5H',
    22,
    'Acatel',
    85499,
    0,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular23 = new Producto(
    'Huawei P50',
    23,
    'Huawei',
    99999,
    15,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

const Celular24 = new Producto(
    'Acatel h3',
    24,
    'Acatel',
    65499,
    30,
    'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
    0
);

//*productos.

const productos = [
    Celular1,
    Celular2,
    Celular3,
    Celular4,
    Celular5,
    Celular6,
    Celular7,
    Celular8,
    Celular9,
    Celular10,
    Celular11,
    Celular12,
    Celular13,
    Celular14,
    Celular15,
    Celular16,
    Celular17,
    Celular18,
    Celular19,
    Celular20,
    Celular21,
    Celular22,
    Celular23,
    Celular24,
];