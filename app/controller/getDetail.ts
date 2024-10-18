const dataVal = {
    name : "John",
    age : 30,
    occupation : "Software Engineer"
}

export const getData = () => {
    const returnData = {
        message : "Hello World",
        data : dataVal
    }
    
    return returnData;
}

export const postData = (req) => {
    for (const key in req) {
        if (req.hasOwnProperty(key) && dataVal.hasOwnProperty(key)) {
            (dataVal as any)[key] = req[key];
        }
    }
    return {
        message: "Data updated successfully",
        data: dataVal
    };
};