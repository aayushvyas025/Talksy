import React from 'react'
import IconComponent from '../Icon/IconComponent'

function UserInfoComponent({userTitle , userInfo, icon, iconSize, iconStyle}) {
  return (
      <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <IconComponent icon={icon} iconSize={iconSize}  iconStyle={iconStyle}  />
                {userTitle}
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{userInfo}</p>
            </div>
  )
}

export default UserInfoComponent