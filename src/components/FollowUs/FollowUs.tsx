import { classes } from "../../utils/tailwindClasses";

const FollowUs = () => {
    return (
        <section className="max-w-[1224px] mx-auto px-5 mb-12 xl:px-0">
            <div className="mt-6 mb-2 xs:mt-15 xs:mb-4 xl:mt-22 xl:mb-6">
                <h2 className="text-[20px] font-bold leading-[1.4] md:text-[24px] xl:text-[32px] xl:font-semibold">Follow Us @Modimal</h2>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 xl:grid-cols-[302px_302px_310px_310px]">
                <div className="hidden md:block bg-[url('/src/assets/images/follow1.jpg')] bg-cover bg-center col-span-2 row-span-2 w-full h-full xl:w-[604px] xl:h-[750px]"></div>
                <div className={`${classes.followUsImg} bg-[url('/src/assets/images/follow1.jpg')] md:bg-[url('/src/assets/images/follow2.jpg')`}></div>
                <div className={`${classes.followUsImg} bg-[url('/src/assets/images/follow2.jpg')] md:bg-[url('/src/assets/images/follow3.jpg')`}></div>
                <div className={`${classes.followUsImg} bg-[url('/src/assets/images/follow3.jpg')] md:bg-[url('/src/assets/images/follow4.jpg')`}></div>
                <div className={`${classes.followUsImg} bg-[url('/src/assets/images/follow4.jpg')] md:bg-[url('/src/assets/images/follow5.jpg')`}></div>
            </div>
        </section>
    );
};

export default FollowUs;