const React = require('react');

class New extends React.Component {
    render() {
        return (
            // <div>
            // <h1>New Fruit Page</h1>
            // <form action="/fruits" method="POST">
            //   Name: <input placeholder="Add Name" type="text" name="name" /><br/>
            //   Color: <input placeholder="Add Color" type="text" name="color" /><br/>
            //   Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
            //   <input type="submit" name="" value="Create Fruit"/>
            // </form>
            // </div>
            <>
            <form action="/fruits" method="POST">
                 Name: <input placeholder="Add Name"type="text" name="name" /><br/>   
                  Color: <input placeholder="Add Color"type="text" name="color" /><br/>
                  Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                  <input type="submit" name="" value="Create Fruit"/>
             </form>
         </>
 
        );
    }
};

module.exports = New;