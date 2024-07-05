import React from 'react'
import Form from './Form'
import Table from './Table'

const Main = () => {
    return (
        <main className='w-full h-auto bg-slate-300 flex items-center justify-center flex-column'>
            <section className='container-fluied w-[70%] h-[90vh] flex items-center justify-center'>
                <Form />
            </section>
            <section className='container-fluied w-[70%] h-auto flex items-center justify-center'>
                <Table/>
            </section>
        </main>
    )
}

export default Main