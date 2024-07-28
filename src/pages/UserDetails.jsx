import React, { useState } from 'react';
import UserInformation from '../components/UserInformation';
import AddressInformation from '../components/AddressInformation';
import EducationForm from '../components/EducationInformation';
import { useNavigate } from 'react-router';

function UserDetails() {
    const [activeTab, setActiveTab] = useState('pills-home');
    const navigate = useNavigate();

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container p-4 my-2">
            <ul className="nav nav-pills mb-3 shadow p-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'pills-home' ? 'active' : ''}`}
                        id="pills-home-tab"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected={activeTab === 'pills-home'}
                        onClick={() => handleTabChange('pills-home')}
                    >
                        Personal Details
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'pills-profile' ? 'active' : ''}`}
                        id="pills-profile-tab"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected={activeTab === 'pills-profile'}
                        onClick={() => handleTabChange('pills-profile')}
                    >
                        Address
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'pills-contact' ? 'active' : ''}`}
                        id="pills-contact-tab"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected={activeTab === 'pills-contact'}
                        onClick={() => handleTabChange('pills-contact')}
                    >
                        Education
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className={`tab-pane fade ${activeTab === 'pills-home' ? 'show active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <UserInformation onSave={() => handleTabChange('pills-profile')} />
                </div>
                <div className={`tab-pane fade ${activeTab === 'pills-profile' ? 'show active' : ''}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <AddressInformation onSave={() => handleTabChange('pills-contact')} />
                </div>
                <div className={`tab-pane fade ${activeTab === 'pills-contact' ? 'show active' : ''}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <EducationForm onSave={() => navigate('/')} />
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
