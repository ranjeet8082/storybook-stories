import { Tablr } from "./Tablr";

export default {
  title: "components/Tablr",
  component: Tablr,
  args: {
    userName: "Abc",
  },
};

export const Basic = (args) => {
  return <Tablr {...args}></Tablr>;
};
