import React,{Component} from 'react'

export const Theme = React.createContext()

export default class ThemeProvider extends Component{


        state={
            colors:{
                primary:"",
                secondary:"",
                dark:"",
                light:"",
                textDefault:"",
                textPrimary:"",
                textSecondary:"",

            }
        }

    changeColorScheme(colorsArray){
        let colorScheme={}
        let values = Object.keys(this.state.colors)
        values.map((values,index)=>{
            colorScheme[value]=colorsArray[index]
        })
        console.log("new color scheme  "+colorScheme);
        this.setState({colors:colorScheme})

    }

        changeTheme(scheme){
            console.log("will change color scheme to "+scheme)
            switch(scheme){
                case "night":
                    let colorsArray=["#9E9E9E","#607D8B","#616161","#F5F5F5","#212121","#212121","#757575"]
                    this.changeColorScheme(colorsArray)
                    break;
                case "sun":
                    let colorsArray=["#FFC107","#FF9800","#FFA000","#FFECB3","#212121","#212121","#757575"]
                    this.changeColorScheme(colorsArray)
                    break;
                case "blue":
                    let colorsArray=["#3F51B5","#448AFF","#303F9F","#C5CAE9","#FFFFFF","#212121","#757575"]
                    this.changeColorScheme(colorsArray)
                    break;
                


            }
        }

    render(){
        return (
            <Theme.Provider value={{theme:this.state,
            changeTheme:this.changeTheme
            }
            }>
                {this.props.children}
            </Theme.Provider>
        )
    }

}