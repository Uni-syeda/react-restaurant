import React from "react"
function Order(){
    return (
        <div>
    <div className="flex-container">
        <span id="right-border">Taste Of Hyderabad</span>
        <span>456 Heather Hill, Boulder, Co</span>
        <a href="#">Log in</a>
    </div>
    <div className="container">
        <h1>Taste Of Hyderabad</h1>
        <ul className="flex-container">
            <li>456 Heather Hill</li>
            <li>Opens today at 11am</li>
            <li><a href="# ">More info</a></li>
        </ul>
    </div>
    <div className="container1">
        <select className="margin-left">
            <option>Categories</option>
            <option>popular Items</option>
            <option>Vegetarian Starters</option>
            <option>Non-Vegetarian Starters</option>
            <option>Tandoor Kebabs(SERVED WITH CHUTNEYS)</option>
            <option>Vegetarian Entrees(NOT SERVED WITH RICE)</option>
        </select>
        <input type="text" placeholder="Search" required/>
     
    </div>
    <h2>Popular Items</h2>
    <div className="box">
        <div className="boxes">
            <h3>GARLIC NAAN</h3>
                <p>Garlic and herb-infused, teardrop-shaped leavened bread baked in a tandoor oven.</p>
                <p>$3.49</p>
        </div>
        <div className="boxes">
        </div>
    </div>
    <div className="box">
        <div className="boxes">
        </div>
        <div className="boxes">
        </div>
    </div>
    <div className="box">
        <div className="boxes">
        </div>
        <div className="boxes">
        </div>
    
    </div>

    {/* <!-- HTML code-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Order</title>

        <link rel="stylesheet" type="text/css" href="./public/styles/online-order.css" />
    </head>
    <body>
        <div class="flex-container">
            <span id="right-border">Taste Of Hyderabad</span>
            <span>456 Heather Hill, Boulder, Co</span>
            <a href="#">Log in</a>
        </div>
        <div class="container">
            <h1>Taste Of Hyderabad</h1>
            <ul class="flex-container">
                <li>456 Heather Hill</li>
                <li>Opens today at 11am</li>
                <li><a href="#">More info</a></li>
            </ul>
        </div>
        <div class="container1">
            <select class="margin-left">
                <option>Categories</option>
                <option>popular Items</option>
                <option>Vegetarian Starters</option>
                <option>Non-Vegetarian Starters</option>
                <option>Tandoor Kebabs(SERVED WITH CHUTNEYS)</option>
                <option>Vegetarian Entrees(NOT SERVED WITH RICE)</option>
            </select>
            <input type="text" placeholder="Search" />
        </div> */}
{/* 
<!-- order section --> */}
        <h2>Popular Items</h2>
        <div className="box">
            <div className="boxes">
                <h3>GARLIC NAAN</h3>
                <p>Garlic and herb-infused, teardrop-shaped leavened bread baked in a tandoor oven.
                $3.49</p>
            </div>

            <div className="boxes">
                <h3>Paratha</h3>
                <p>Flaky, buttery bread, ideal for soaking up flavorful gravies.</p>
                <p>$2.99</p>
            </div>
        </div>

        <div className="box">
            <div className="boxes">
                <h3>Hyderabadi Dum Biryani</h3>
                <p>Fragrant basmati rice cooked with vegetables and aromatic spices.</p>
                <p>$10.99</p>
            </div>
            <div className="boxes">
                <h3>Masala Chai</h3>
                <p>Traditional Indian spiced tea, brewed with ginger, cardamom, and cloves.</p>
                <p>$2.49</p>
            </div>
        </div>
        <div className="box">
            <div className="boxes">
                <h3>Shikampur Kebab</h3>
                <p>Minced meat patties stuffed with a flavorful mixture of spices and served with mint chutney.</p>
                <p>$11.99</p>
            </div>

            <div className="boxes">
                <h3>Gajar Ka Halwa</h3>
                <p>Warm, comforting carrot pudding, flavored with ghee, cardamom, and nuts.</p>
                <p>$7.99</p>
            </div>
        </div>

        <h2>Appetizers</h2>
        <div className="box">
            <div className="boxes">
                <h3>Hyderabadi Mirchi Bajji</h3>
                <p>Spicy stuffed green chilies, deep-fried to perfection.</p>
                <p>$5.99</p>
            </div>

            <div className="boxes">
                <h3>Shikampur Kabab</h3>
                <p>Tender minced meat patties stuffed with a savory blend of spices and yogurt, pan-fried to perfection.</p>
                <p>$7.99</p>
            </div>
        </div>

        <div className="box">
            <div className="boxes">
                <h3>Lukhmi</h3>
                <p>Crispy pastry filled with spiced minced meat, a Hyderabadi specialty reminiscent of savory turnovers.</p>
                <p>$6.99</p>
            </div>
            <div className="boxes">
                <h3>Veg Samosa</h3>
                <p>Crispy pastry filled with a delightful mix of spiced potatoes, peas, and cashews, a vegetarian favorite.</p>
                <p>$4.99</p>
            </div>
        </div>
        <div className="box">
            <div className="boxes">
                <h3>Dahi Vada</h3>
                <p>Soft lentil dumplings soaked in yogurt, garnished with tangy chutneys and spices, a refreshing and flavorful appetizer.</p>
                <p>$6.49</p>
            </div>
        </div>

        <h2>Main Course-Vegetarian</h2>
        <div className="box">
            <div className="boxes">
                <h3>Hyderabadi Dum Paneer Biryani</h3>
                <p>Fragrant basmati rice layered with marinated paneer and aromatic spices, slow-cooked to perfection.</p>
                <p>$12.99</p>
            </div>

            <div className="boxes">
                <h3>Bagara Baingan</h3>
                <p>Tender baby eggplants simmered in a rich peanut and sesame seed gravy, bursting with tangy flavors.</p>
                <p>$10.99</p>
            </div>
        </div>

        <div className="box">
            <div className="boxes">
                <h3>Hyderabadi Mirchi Ka Salan</h3>
                <p>Spicy green chili peppers cooked in a tangy peanut and sesame seed gravy, a traditional Hyderabadi delicacy.</p>
                <p>$11.99</p>
            </div>
            <div className="boxes">
                <h3>Paneer Tikka Masala</h3>
                <p>Succulent cubes of paneer cooked in a creamy tomato-based gravy, infused with aromatic spices.</p>
                <p>$13.49</p>
            </div>
        </div>
        <div className="box">
            <div className="boxes">
                <h3>Dal Makhani</h3>
                <p>Creamy black lentils simmered with butter and aromatic spices, a rich and comforting staple of Indian cuisine.</p>
                <p>$9.99</p>
            </div>
        </div>

        <h2>Main Course-Non-Vegetarian</h2>
        <div className="box">
            <div className="boxes">
                <h3>Hyderabadi Chicken Dum Biryani:</h3>
                <p>Aromatic basmati rice cooked with succulent chicken and a blend of Hyderabadi spices, layered and slow-cooked to perfection.</p>
                <p>$14.99</p>
            </div>

            <div className="boxes">
                <h3>Nizami Mutton Curry</h3>
                <p>Tender mutton cooked in a rich and flavorful gravy, infused with Nizami spices for an authentic taste of Hyderabad.</p>
                <p>$16.99</p>
            </div>
        </div>

        <div className="box">
            <div className="boxes">
                <h3>Chicken 65 (Spicy Fried Chicken)</h3>
                <p>Juicy chicken pieces marinated in fiery spices, deep-fried to perfection for a crispy exterior and a burst of flavor in every bite.</p>
                <p>$13.99</p>
            </div>
            <div className="boxes">
                <h3>Hyderabadi Fish Curry</h3>
                <p>Fresh fish cooked in a tangy and aromatic gravy made with traditional Hyderabadi spices, a seafood lover's delight.</p>
                <p>$15.99</p>
            </div>
        </div>
        <div className="box">
            <div className="boxes">
                <h3>Gangura Mutton (Mutton Cooked With Sorrel Leaves)</h3> <p>Tender mutton cooked with tangy sorrel leaves, creating a unique and flavorful dish with a perfect balance of sourness and spices.</p>
                <p>$17.49</p>
            </div>
        </div>

        <h2>Breads</h2>
        <div className="box">
            <div className="boxes">
                <h3>Naan</h3>
                <p>Soft and fluffy leavened Indian bread, traditionally cooked in a tandoor oven, perfect for soaking up rich gravies.</p>
                <p>$2.49</p>
            </div>

            <div className="boxes">
                <h3>Roti</h3>
                <p>Simple whole wheat flatbread, cooked on a griddle, a staple accompaniment to curries and lentils in Indian cuisine.</p>
                <p>$1.99</p>
            </div>
        </div>

        <div className="box">
            <div class="boxes">
                <h3>Garlic Naan</h3>
                <p>Flavorful naan bread infused with garlic and herbs, adding a delicious aroma and taste to your meal.</p>
                <p>$2.99</p>
            </div>
            <div className="boxes">
                <h3>Butter Naan</h3>
                <p>Naan bread brushed with melted butter, offering a rich and indulgent twist to the classic Indian bread.</p>
                <p>$2.99</p>
            </div>
        </div>
        <div className="box">
            <div class="boxes">
                <h3>Tandoori Roti</h3>
                <p>Whole wheat bread cooked in a tandoor oven, imparting a smoky flavor and a slightly crispy texture, perfect for pairing with grilled dishes.</p>
                <p>$2.49</p>
            </div>
        </div>

        <h2>Desserts</h2>
        <div className="box">
            <div className="boxes">
                <h3>Double ka Meetha (Sweet Bread Pudding)</h3>
                <p>Indulgent dessert made from fried bread slices soaked in sweetened milk, infused with cardamom and saffron, a rich and comforting treat.</p>
                <p>$5.99</p>
            </div>

            <div className="boxes">
                <h3>Qubani ka Meetha (Apricot Pudding)</h3>
                <p>Luscious dessert made from stewed apricots in sugar syrup, served with a creamy topping, offering a delightful blend of sweet and tangy flavors.</p>
                <p>$6.49</p>
            </div>
        </div>

        <div className="box">
            <div className="boxes">
                <h3>Hyderabadi Shahi Tukda</h3>
                <p>A royal dessert consisting of fried bread soaked in fragrant saffron-infused milk, garnished with nuts and served chilled, a decadent treat fit for royalty.</p>
                <p>$5.99</p>
            </div>
            <div className="boxes">
                <h3>Kaddu Ki Kheer (Pumpkin Pudding)</h3>
                <p>Creamy pudding made from simmered pumpkin, milk, and sugar, delicately flavored with cardamom and garnished with nuts, offering a unique and comforting dessert experience.</p>
                <p>$4.99</p>
            </div>
        </div>

        <h2>Beverages</h2>
        <div className="box">
            <div className="boxes">
                <h3>Masala Chai (Spiced Tea)</h3>
                <p>Aromatic Indian tea brewed with a blend of spices like cardamom, cinnamon, and ginger, offering a flavorful and comforting beverage experience.</p>
                <p>$2.49</p>
            </div>

            <div className="boxes">
                <h3>Lassi (Sweet or Salted)</h3>
                <p>Refreshing yogurt-based drink, either sweetened with sugar or salted, providing a cooling contrast to spicy meals.</p>
                <p>$3.49</p>
            </div>
        </div>

        <div className="box">
            <div className="boxes">
                <h3>Mango Lassi</h3>
                <p>Creamy yogurt blended with ripe mangoes, creating a sweet and tangy beverage bursting with tropical flavor.</p>
                <p>$3.99</p>
            </div>
            <div className="boxes">
                <h3>Fresh Lime Soda</h3>
                <p>Zesty and refreshing drink made with freshly squeezed lime juice, soda water, and a hint of sweetness, perfect for quenching thirst on a hot day.</p>
                <p>$2.99</p>
            </div>
        </div>
        <div className="box">
            <div className="boxes">
                <h3>Jaljeera (Spiced Cumin Water)</h3>
                <p>Tangy and refreshing drink made with roasted cumin seeds, mint, and spices, offering a cooling and digestive beverage option.</p>
                <p>$2.99</p>
            </div>
        </div>  


        </div>
    )
}
export default Order;