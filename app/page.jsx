import CountDown from '@components/CountDown';

const Home = () =>{
    return(
        <>
            <div>page            
            </div>
            <div className = "w-full h-[25vw] bg-gray-100 flex">
                <CountDown/>
                <CountDown/>
                <CountDown/>
                <CountDown/>
            </div>
        </>
    )
}
export default Home