function NutritionalInfo({ nutritionInfo }) {
  return (
    <div>
      <p>Calories: {nutritionInfo?.calories} kcal</p>
      <p>Protien: {nutritionInfo?.protein} g</p>
      <p>Carbs: {nutritionInfo?.carbs} g</p>
      <p>Fat: {nutritionInfo?.fat} g</p>
    </div>
  )
}

function MenuItem({ name, price, nutritionInfo }) {
  return (
    <>
      <p>
        <strong>{name}</strong> | {price}
        <NutritionalInfo nutritionInfo={nutritionInfo} />
      </p>
    </>
  );
}

function Category({ title, foods }) {
  return (
    <div>
      <h2>{title}</h2>
      {foods}
    </div>
  );
}

const friedChicken = (
  <>
    <MenuItem
      name={"2pc Fried Chicken Set"}
      price={"RM10.00"}
      nutritionInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29 }} />
    <MenuItem
      name={"6pc Nugget"}
      price={"RM6.00"}
      nutritionInfo={{ calories: 270, protein: 13, carbs: 16, fat: 16 }} />
  </>
)

const desserts = (
  <>
    <MenuItem
      name={"1pc Sundae Conde"}
      price={"RM2.00"}
      nutritionInfo={{ calories: 207, protein: 2, carbs: 33, fat: 6 }} />
    <MenuItem
      name={"1pc Milkshake"}
      price={"RM3.00"}
      nutritionInfo={{ calories: 270, protein: 1, carbs: 43, fat: 10 }} />
  </>
)

function App() {
  //Javascript zone
  let food = "Chicken"

  return (
    <>
      <h1>Uncle Shauqi Fried {food}</h1>
      <Category title={"Fried Chicken"} foods={friedChicken} />
      <Category title={"Desserts"} foods={desserts} />
    </>
  );
}

export default App
