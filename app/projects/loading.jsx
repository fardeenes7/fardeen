import { Navigation } from "../components/nav";
import Loader from "../components/loading";
export default function Loading() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <Navigation />
            <div>
                <Loader />
            </div>
        </div>
    );
}
