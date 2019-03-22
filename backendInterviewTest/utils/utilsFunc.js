const configs = {};
configs.set = function(properties) {
    return setProperties(configs, properties);
}

//给定的properties 写入 target
function setProperties(target, properties) {
    Object.keys(properties).forEach(v => {
        const val = properties[v];
        //若是对象，则深拷贝
        //此处不考虑值为Array的情况
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!target[v]) target[v] = {};
            setProperties(target[v], val);
        } else {
            target[v] = val;
        }
    });
    return target;
}

modules.exports = configs;

