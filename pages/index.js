import { Heading, Page } from "@shopify/polaris";
import ProduitState from "./Components/ProduitState.js";


var initProds = [];
for(var i = 1; i <= 10; i++)
	initProds.push({
		id: i,
		name: "Produit " + i,
		quantity: i,
		description: "Description du Produit " + i,
	});

var prodsModel = {id:initProds.length,name:'',quantity:0,description:''};
const Index = () => (
  <Page>
	<ProduitState initProduits={initProds} produitModel={prodsModel} />
  </Page>
);

export default Index;

