

export default function Layout({children}: {children: React.ReactNode}){
    return (
        <div className="flex">
            {/* sidebar item */}
            <div className="w-72 mt-20 px-4 shadow">
                <div className="flex flex-col gap-4 justify-start">
                    <div className="flex gap-2">
                        {/* <House /> */}
                    </div>
                </div>
            </div>


            {/* render children item */}
        </div>
    )
}