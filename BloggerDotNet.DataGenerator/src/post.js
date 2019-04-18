class Post {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }
    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
    get modifiedAt() {
        return this._modifiedAt;
    }

    set modifiedAt(value) {
        this._modifiedAt = value;
    }
    get createdAt() {
        return this._createdAt;
    }

    set createdAt(value) {
        this._createdAt = value;
    }
    constructor(id,title,description,status,content,createdAt,modifiedAt) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._status = status;
        this._content = content;
        this._createdAt = createdAt;
        this._modifiedAt = modifiedAt;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
module.exports = Post;