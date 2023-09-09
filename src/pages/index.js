import Link from "next/link";

export default function HomePage() {
    return (
    <div className ="grid-halves h-screen-navbar">
        <div className ="bg-teal border-right">
            <div className = "column-padding">
                <div className = "tablet-centered">
                    <div className = "content-grid home-hero">
                        <h1>
                            Products
                        </h1>
                        <p className = "section-subtitle">Some data</p>
                        <p>data2</p>
                        <Link href='/products' className = "large-button">
                            <div className = "large-button-text">Explore Products</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className = "bg-salmon">
            <div className = "column-padding centered">
                <div className = "callout-wrap">
                    <Image className = "callout-image"></Image>
                </div>
            </div>
        </div>
    </div>
    )
}