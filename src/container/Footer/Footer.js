import React from 'react'
import TopFooter from '../../Components/TopFooter/TopFooter'

export default function Footer() {
    return (
        <div>
            <div className="bg-light mt-4">
                <div className="container py-4">
                    <div className="row">
                        <TopFooter/>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="container text-center py-2">
                  <p className="mt-3">Copyright © 2021 All Rights Reserved by  MD.Raihan Badsha.</p>
                </div>
            </div>
        </div>
    )
}
