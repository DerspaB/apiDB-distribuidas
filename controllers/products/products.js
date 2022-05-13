const {response, request} = require('express');

const getProducts = (req = request, res = response) => {
    
    const productsData = [
        {
            name: 'PC Gamer NVIDIA BATTLEBOX ESSENTIAL',
            precio: 4879000,
            img: 'https://cdn.coordiutil.com/imagen-pc_gamer_core_i3_10100_gtx_1650_8_ram_ssd_240_board_b460_chasis_l7_fuente_real_550-2066095-800-600-1-75.jpg' 
        },
        {
            name: 'PC Gamer Titán V3',
            precio: 5399000,
            img: 'https://i.linio.com/p/60c36170355074064011f51882ffdd1f-product.jpg' 
        },
        {
            name: 'PC Gamer BATTLEBOX SUPER',
            precio: 699000,
            img: 'https://tecnobits.net/wp-content/uploads/2020/03/como-armar-una-pc-gamer-gama-alta.jpg' 
        },
        {
            name: 'PC Gamer Ultra',
            precio: 799000,
            img: 'https://cdn.shopify.com/s/files/1/0254/2144/7246/products/508b8690-18ab-4ee0-ba60-6aa2d0911089_800x800.png?v=1646326960' 
        },
    ]

    res.status(200).json({
        msg: 'get products succes',
        products: productsData
    });
}


module.exports =  {
    getProducts
}