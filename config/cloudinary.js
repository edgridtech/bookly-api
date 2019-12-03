const cloudinary = require('cloudinary');

cloudinary.config({
cloud_name: 'dme34vxri',
api_key: '915981537716994',
api_secret: '7Pn4dAFbYTzU4ZGuGGSyBvsJQYg'
});

exports.uploads = (file) =>{
return new Promise(resolve => {
cloudinary.uploader.upload(file, (result) =>{
resolve({url: result.url, id: result.public_id})
}, {resource_type: "auto"})
})
}