import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return(
        <div>
            <h1>Oops !!!!</h1>
            <h1>This is not working</h1>
            <h1>{err.message} : {err.statusText}</h1>
        </div>
    )
}

export default Error;