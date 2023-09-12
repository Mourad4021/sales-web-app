export default function withRow(Component) {
  // eslint-disable-next-line react/prop-types
  const EnhancendComponent = ({ row }) => <Component {...row} />;

  return EnhancendComponent;
}
