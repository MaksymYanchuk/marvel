import { Link } from "react-router-dom"
import ErrorMessage from "../errorMessage/ErrorMessage"

const  Page404 = () => {
    return(
        <div>
            <div style={{'display': 'flex', 'justifyContent': 'center', 'marginBottom': '20px' }}>
                <ErrorMessage/>
            </div>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>Page doesn't exist</p>
            <Link to={'/'}style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Back to main page</Link>
        </div>
    )
}

export default Page404