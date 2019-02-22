var app = new Vue({
	el:'#app',
	data:{
		brand: 'Vue Master' ,
		product:'Sock' , 
		description: 'A pair of warm fuzzy socks',
		selectedVariant:0,
		imagesalt:'sock product',
		link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
		inventory:0,
		onSale:false,
		details:["80% cotton" , "20% polyester" , "Gender-neutral"],
		variants:[
			{
				variantId:2234,
				variantColor:"green",
				variantImage:'./assets/vmSocks-green.jpeg' ,
				variantQuantity: 10     
			},
			{
				variantId:2235,
				variantColor:"blue",
				variantImage:'./assets/vmSocks-blue.jpeg' ,
				variantQuantity: 0   

			}
		],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
		cart:0
	},
	methods:{
		AddToCart() {
			this.cart += 1
		},
		updateProduct : function (index) {
			this.selectedVariant = index
		},
		RemoveToCart(){
			this.cart -= 1
		}
	},
	computed:{
		title(){
			return this.brand + ' ' + this.product
		},
		images(){
			return this.variants[this.selectedVariant].variantImage
		},
		inStock(){
			return this.variants[this.selectedVariant].variantQuantity
		}
	}
});