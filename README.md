## Redux

> 由于createStore被标记为废弃,所以使用configureStore代替

### ImmutableJS

用于对redux的性能优化

#### 基本API

- 对象转成Immutable对象:Map
- 数组转成Immutable数组:List
- 深层转换:fromJS
- Immutable类型转回:toJS()

#### 基本操作

- 修改数据:set
- 获取数据:get

> getIn() === get().get()

#### 集合redux

- 使用redux-immutable中的combineReducers
- 所有的reducer中的数据都转化成Immutable类型的数据



> 当使用Immutable时可能会触发redux的序列化检测，使用如下代码关闭
>
> ```ts
> middleware: getDefaultMiddleware => getDefaultMiddleware({
>             //关闭redux序列化检测
>             serializableCheck: false
>         })
> ```

