import HomeOutlined from '@ant-design/icons/HomeOutlined'
import allPaths from '../Config/paths'

const bgColor = '#0adc00'

const drawerRoutes = [
    {
        title: 'Home',
        route: allPaths.HOME,
        icon: <HomeOutlined />
    }
]
const googleClientId = '1093943387531-sut2415eo36iv4capfstrunii744er9o.apps.googleusercontent.com'


export {
    bgColor,
    drawerRoutes,
    allPaths,
    googleClientId
}

