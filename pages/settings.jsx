import Header from "../components/Header"
import { ReactComponent as MetaLogo } from '../assets/icons/meta.svg';
import { useState } from "react";
import EditProfile from "../components/settings/EditProfile";
import ChangePassword from "../components/settings/ChangePassword";
import Help from "../components/settings/Help";

function settings() {
  const [tabState, setTabState] = useState(1);

  const toggleTab = (index) => {
      setTabState(index)
  }
    
  return (
    <div className="bg-gray-50 h-screen">
        <Header />
        
        <div className="flex justify-center items-center h-[54.4rem]">
            <div className="flex justify-center border items-center bg-white">
                {/* Site Bar */}
                <div className="flex flex-col max-w-[15rem] border-r-[1px]">
                    <div className="flex flex-col">
                        <div 
                            onClick={() => toggleTab(1)} 
                            className={tabState === 1 ? "flex items-start text-base py-4 pr-4 pl-[32px] font-semibold border-l-2 border-black" : "settingsTab"}
                        >
                            Edit Profile
                        </div>
                        <div className="settingsTab">
                            Proffesional Account
                        </div>
                        <div 
                            onClick={() => toggleTab(2)}
                            className={tabState === 2 ? "flex items-start text-base py-4 pr-4 pl-[32px] font-semibold border-l-2 border-black" : "settingsTab"}
                        >
                            Change Password
                        </div>
                        <div className="settingsTab">
                            Apps and Websites
                        </div>
                        <div className="settingsTab">
                            Email and SMS
                        </div>
                        <div className="settingsTab">
                            Push Notifications
                        </div>
                        <div className="settingsTab">
                            Manage Contacts
                        </div>
                        <div className="settingsTab">
                            Privacy and Security 
                        </div>
                        <div className="settingsTab">
                            Login Activity
                        </div>
                        <div className="settingsTab">
                            Emails from Instagram
                        </div>
                        <div onClick={() => toggleTab(3)} className={tabState === 3 ? "flex items-start text-base py-4 pr-4 pl-[32px] font-semibold border-l-2 border-black" : "settingsTab"}>
                            Help
                        </div>
                    </div>

                    <div className="flex justify-center flex-col p-5 border-t-[1px] bg-white">
                        {/* <MetaLogo /> */}
                        <h3 className="text-base text-blue-500 font-semibold mb-2">Accounts Center</h3>
                        <p className="text-xs text-gray-400">Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.</p>
                    </div>
                </div>
                
                {/* Content */}
                <div className={tabState === 1 ? "flex" : "hidden"}>
                    <EditProfile />
                </div>
                <div className={tabState === 2 ? "flex" : "hidden"}>
                    <ChangePassword />
                </div>
                <div className={tabState === 3 ? "block" : "hidden"}>
                    <Help />
                </div>
            </div>
        </div>
    </div>
  )
}

export default settings