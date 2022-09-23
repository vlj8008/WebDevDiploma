
var BurgerName;
var OrderTotal = 0;
var DeliveryYes = false;

alert("Below is our menu: \n\n Burgers:\n 1.Large Dusty: $3 \n\
2. Small Dusty: $2 \n 3. Big Chief: $7\n\Fries:\n1.Small: $1\n2.Large: $2\n");

var BurgerVar = prompt("Select burger: \n 1.Large Dusty: $3 \n\
2. Small Dusty: $2 \n 3. Big Chief: $7");
var FriesVar = prompt("Fries:\n1.Small: $1\n2.Large: $2\n");


if(BurgerVar == 1)
{
    BurgerName = "Large Dusty";
    BurgerPrice = 3; 
}

else if(BurgerVar == 2)
{
    BurgerName = "Small Dusty";
    BurgerPrice = 2;
}

else if (BurgerVar == 3)
{
    BurgerName = "Big Chief";
    BurgerPrice = 7;
}

if(FriesVar == 1)
{
    FriesName = "Small";
    FriesPrice = 1;
}

else if (FriesVar == 2)
{
    FriesName = "Large";
    FriesPrice = 2;
}


//Constructor function
function Order(BurgerName, BurgerPrice, FriesName, FriesPrice)
{
    this.burgerName = BurgerName;
    this. burgerCost = BurgerPrice;
    this.friesName = FriesName;
    this.friesPrice = FriesPrice;

    this.delivery = function()
    {
        var DeliveryAns = prompt("Would you like your order delivered ? Y or N ?");

        if(DeliveryAns == "Y")
        {
            DeliveryYes = true;
            
        }   
    }
    this.display = function()
    {
        if(DeliveryYes == true)
        {
            alert("Burger: " + this.burgerName + ", Cost: $ " + this.burgerCost + 
            "Fries: " + this.friesName + "Cost: $:" + this.friesPrice + "Delivery cost: $5. TOTAL: "
            + (this.burgerCost + this.friesPrice +5));
        }

        else if(DeliveryYes == false)
        {
            alert("Burger: " + this.burgerName + ", Fries: " + this.friesName +  "Cost: $ " + (this.burgerCost + this.friesPrice));
        }
    }
}

//Create Order object

var order1 = new Order(BurgerName,BurgerPrice,FriesName,FriesPrice)


order1.delivery();
order1.display();



    