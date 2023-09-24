import { ComingSoon } from "../components/coming-soon";
import { Navigation } from "../components/nav";

export default function Blog() {
    return (
        <div className="relative pb-16 overflow-hidden">
            <Navigation />
            <ComingSoon />;
        </div>
    );
}
