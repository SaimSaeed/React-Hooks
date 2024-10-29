import React, { useEffect,useLayoutEffect, useRef, useState } from 'react'

function ModalExample() {
    // This will show the pop up first to its orignal position which was without the bottom space then go to the bottom space positon
    // because we are using useEffect and use Effect just loads with the dom so it will show popup to its orignal position then dom calcualtes and useEffect changes position
    // this can be solved using Layout Effect if we use Layout Effect it will show the pop up after the dom calculates so there will be no fluctuation in the position of the popup text
    // This example show be run seperately other wise difference will not show because of ui inconsistency
    const [show, setShow] = useState(false)
    const popUp = useRef()
    const button = useRef()
    useLayoutEffect(() => {
        if (popUp.current == null || button.current == null){return}
        // this will get the boundary of the rectangle in this case button and move the popup 25px away from it
        const {bottom} = button.current.getBoundingClientRect()
        popUp.current.style.top = `${bottom+ 25}px`
    }, [show])
    return (
        <div style={{position:"relative"}}>
            <h1>Modal Example For useLayoutEffect</h1>
            <button onClick={() => setShow(prevShow => !prevShow)} ref={button}>
                Toggle Show!
            </button>
            {
                show && <div style={{ textAlign: "center",position:"absolute" }} ref={popUp}>
                    This is a PopUp.
                </div>
            }
        </div>
    )
}

export default ModalExample