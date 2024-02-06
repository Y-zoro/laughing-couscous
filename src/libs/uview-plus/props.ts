// 全局设置uview-plus props 默认值

export const setUviewPlus = () => {

    uni.$u.props.tabs.lineColor = '#fff'
    uni.$u.props.tabs.activeStyle = {
        color: '#fff',
        lineHeight: '44px'
    }
    uni.$u.props.tabs.inactiveStyle = {
        color: '#fff',
        lineHeight: '44px'
    }
}
