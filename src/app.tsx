import { useState } from 'react'
import './index.css'

const App = () => {
    const phrases = [
        "No",
        "Think again !",
        "Are you sure?",
        "Really sure",
        "Take your time",
        "I know you want to ",
        "pokkie please",
        "Are you positive ?",
        "You are breaking my heart :(",
    ]
    const [sayno, setSayNo] = useState<number>(0);
    const [noCount, setNoCount] = useState<number>(0);
    const [yesPressed, setYesPressed] = useState<boolean>(false);
    const btnsize = sayno * 20 + 16;


    const handleClick = () => {
        setSayNo(sayno + 1);
        setNoCount(noCount + 1);
        if (noCount == phrases.length - 1) setNoCount(0);

    }

    return (
        <div className='h-screen w-full  flex  flex-col justify-center items-center'>
            {
                yesPressed ?
                    (
                        <>
                            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" height={400} width={400} className='object-contain' alt="bear-image" />

                            <h1 className="text-6xl font-semibold">Ok yay !!</h1>

                        </>
                    ) : (
                        <>
                            <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" height={400} width={400} className="object-contain" alt="bear-image" />

                            <h1 className="text-6xl font-semibold">Will you come out with me ? </h1>
                            <div className='flex items-center space-x-3 mt-4'>
                                <button onClick={() => {
                                    setYesPressed(true);
                                    setSayNo(0)

                                }} className={` bg-green-500 rounded-md text-white  py-3 px-6 hover:bg-green-600 font-semibold`} style={{ fontSize: btnsize }}>Yes</button>
                                <button className='bg-red-500 rounded-md text-white py-3 px-6 hover:bg-red-600 font-semibold ' onClick={handleClick}>{phrases[noCount]}</button>
                            </div>

                        </>
                    )
            }

        </div>

    )
}

export default App;
