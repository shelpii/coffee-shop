import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import ErrorMessage from "../../../layouts/errorMessage/ErrorMessage";
import './NotFoundPage.scss';

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
				<meta name="description" content="404 Page Not Found" />
				<title>404 Not Found</title>
			</Helmet>
            <section className="not__found">
                <ErrorMessage message ='Page not found'/>
                <Link to='/' className="not__found_button button-back">Back to main page</Link>
            </section>
        </>
    )
}

export default NotFoundPage;