module.exports = (sequealize, Datatypes) => {

    const Posts = sequealize.define("Posts", {
        title : {
            type: Datatypes.STRING,
             allowNull: false,
        },
        postText : {
            type: Datatypes.STRING,
             allowNull: false,
        },
        userName : {
            type: Datatypes.STRING,
            allowNull: false,
        },
    });

    return Posts;
}