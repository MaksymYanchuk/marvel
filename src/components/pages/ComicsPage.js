import AppBanner from "../appBanner/AppBanner";
import { Helmet } from "react-helmet";
import ComicsList from "../comicsList/ComicsList"
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                />
                <title>Comcics page</title>
            </Helmet>
            <AppBanner/>
            <ErrorBoundary>
                <ComicsList/>
            </ErrorBoundary> 
        </>
    )
}

export default ComicsPage