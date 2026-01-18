import AnimatedGrid from "./animation";

// pages/sticky-layout.tsx
export default function Sticky() {
    return (
        <div className="flex h-screen bg-[#eff5fa]">
            {/* Scrollable Left Section */}
            <div className="w-1/2 overflow-y-scroll scrollbar-hidden p-10 ml-50 mt-20 bg-[#eff5fa] font-sans">
                <h1 className="text-lg font-bold text-blue-600">Immersive Experiences</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    A fully integrated virtual travel platform.
                </p>
                <p className="text-gray-600 mt-8 text-xl">
                    Explore the world from your home with cutting-edge 360° technology. Use GlobalTrek to access breathtaking destinations, experience cultural wonders, and embark on virtual adventures across the globe.
                </p>

                <h1 className="text-lg mt-50 font-bold text-blue-600">360° Photography</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    Capture every angle of the world
                </p>
                <p className="text-gray-600 mt-8 text-xl">
                    Experience stunning panoramic views from iconic landmarks, hidden gems, and natural wonders. Our high-resolution 360° photos let you explore destinations as if you were really there.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 mt-7 text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                    Explore 360° Photos
                    <span className="text-white text-xl transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                    </span>
                </button>
                <div className="text-sm text-gray-700 space-y-2 mt-20">
                    <div className="font-semibold text-gray-900">See also</div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Virtual Tours</span>
                        <span> for guided exploration experiences</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Photo Gallery</span>
                        <span> for curated destination collections</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Download Options</span>
                        <span> for high-resolution panoramic images</span>
                    </div>
                </div>

                <h1 className="text-lg font-bold mt-50 text-blue-600">360° Video</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    Immersive video journeys
                </p>
                <p className="text-gray-600 mt-8 text-xl">
                    Watch breathtaking 360° videos that transport you to incredible destinations. Experience the sights and sounds of the world with our immersive video content.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 mt-7 text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                    Watch 360° Videos
                    <span className="text-white text-xl transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                    </span>
                </button>

                <div className="text-sm text-gray-700 space-y-2 mt-20">
                    <div className="font-semibold text-gray-900">See also</div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">VR Experience</span>
                        <span> for virtual reality compatible viewing</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Aerial Footage</span>
                        <span> for drone-captured panoramic videos</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Time-lapse</span>
                        <span> for dynamic destination showcases</span>
                    </div>
                </div>

                <h1 className="text-lg font-bold mt-50 text-blue-600">Destinations</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    Discover global wonders
                </p>
                <p className="text-gray-600 mt-8 text-xl">
                    Browse thousands of destinations from every continent. From ancient ruins to modern cities, from tropical beaches to mountain peaks.
                </p>

                <button className="bg-indigo-600 hover:bg-indigo-700 mt-7 text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                    Browse Destinations
                    <span className="text-white text-xl transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                    </span>
                </button>
                <div className="text-sm text-gray-700 mt-20 space-y-2">
                    <div className="font-semibold text-gray-900">See also</div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">World Heritage Sites</span>
                        <span> for UNESCO protected locations</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Natural Wonders</span>
                        <span> for breathtaking landscapes</span>
                    </div>

                    <div>
                        <span className="text-gray-900 font-semibold hover:underline cursor-pointer">Cultural Landmarks</span>
                        <span> for historical significance</span>
                    </div>
                </div>

                <h1 className="text-lg font-bold mt-50 text-blue-600">Premium Access</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    Unlock exclusive content
                </p>
                <p className="text-gray-600 mt-8 text-xl">
                    Get unlimited access to our entire library of 360° photos and videos, early access to new destinations, and exclusive behind-the-scenes content.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 mt-7 text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                    Go Premium
                    <span className="text-white text-xl transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                    </span>
                </button>
            </div>

            {/* Sticky Right Section */}
            <div className="w-1/2 sticky top-0 h-screen p-10 bg-[#eff5fa]">
                <AnimatedGrid />
            </div>
        </div>
    );
}