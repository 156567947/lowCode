import { Input } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant/index";
const { Search } = Input;
export default function ListSearch() {
  const [searchValue, setSearchValue] = useState("");
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const newVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    setSearchValue(newVal);
  }, [searchParams]);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    nav({
      pathname,
      search: `?${LIST_SEARCH_PARAM_KEY}=${searchValue}`,
    });
  };
  return (
    <div>
      <Search
        value={searchValue}
        placeholder="输入关键字"
        onSearch={handleSearch}
        onChange={handleChange}
        enterButton
        style={{ width: "260px" }}
        allowClear
      />
    </div>
  );
}
