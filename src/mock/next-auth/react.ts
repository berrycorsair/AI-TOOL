// Mock next-auth/react for builds
export const useSession = () => {
  return { data: null, status: 'unauthenticated' };
};

export const signIn = () => Promise.resolve({ error: null });
export const signOut = () => Promise.resolve({ url: '/' });
export const SessionProvider = ({ children }: { children: React.ReactNode }) => children;