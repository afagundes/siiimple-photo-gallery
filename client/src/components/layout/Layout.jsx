import React, { useState } from 'react'

import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'

import './layout.css'

const Layout = () => {
    const [openCategories, setOpenCategories] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    const toggleCategoriesMenu = () => {
        if (openSearch) setOpenSearch(false)
        setOpenCategories(!openCategories)
    }

    const toggleOpenSearch = () => {
        if (openCategories) setOpenCategories(false)
        setOpenSearch(!openSearch)
    }

    const headerProps = {
        toggleCategoriesMenu: toggleCategoriesMenu,
        toggleOpenSearch: toggleOpenSearch
    }

    const mainProps = {
        openCategories: openCategories,
        openSearch: openSearch,
        toggleCategoriesMenu: toggleCategoriesMenu
    }

    return (
        <div className="layout">
            <Header {...headerProps} />
            <Main {...mainProps} />
            <Footer />
        </div>
    )
}

export default Layout
