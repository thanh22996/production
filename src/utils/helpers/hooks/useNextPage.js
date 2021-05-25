import { useEffect, useState } from 'react'

const useNextPage = () => {
    const [pageShow, setPageShow] = useState({
        isMenu: true,
        isNextPage: false
    })
    return {
        pageShow,
        setNextPage: () => {
            setPageShow({ isMenu: false, isNextPage: true })
        },
        setDefaultPage: () => {
            setPageShow({
                isMenu: true,
                isNextPage: false
            })
        }
    }
}

export default useNextPage;