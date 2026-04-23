import { cn } from '../utils/helpers';

export default function Button({ as: Component = 'button', variant = 'primary', className = '', ...props }) {
  return <Component className={cn('btn', `btn-${variant}`, className)} {...props} />;
}
