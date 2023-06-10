import { NotificationIcon } from '@/components/Icons'
import { Card } from '@/components/common'

const Notifications = () => {
    return (
        <Card title='Notificationss' icon={<NotificationIcon />} info={<></>}>
            <div className="flex h-full w-full justify-center items-center text-[#9999A9] text-14">
                No notifications yet
            </div>
        </Card>
    )
}

export default Notifications