import React, { useState } from "react";
import App from "../App";


class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account : this.props.dataParenttoChild
        };
    }

/* I couldn't get this to work so sod it; I tried my best.

    getData () {
        var uname = this.state.account;
        var chargelog = "";
        var data = fetch("http://localhost:9000/users")
          .then(response => response.json())
          .then(response => response.filter(item => {
                if (item.username == uname) {
                    console.log(item.charges);
                    chargelog = item.charges;
                    console.log(chargelog);
                    chargelog += "<tr><td><b>" + {item.charges[0].location} + "</b></td></tr>";
                    charges += item.charges.map(r => {
                  "<tr><td><b>" + {r.location} + "</b></td></tr>"})
               }

                   charges += item.charges;
          }));

          return ({chargelog.map(r => (   "<tr><td><b>" + {r.location} + "</b></td></tr>"))}
          
            );
            
        return (data)
    }
*/
      
    render () {
      
        return (
            <div>
                <div>{this.state.account}</div>
                <div>This is where the accound data would go if this whole thing wasn't intent on driving me spare.</div>
            </div>
        );

    }
}

export default Account;