import { SignedOut , UserButton } from '@clerk/clerk-react';
import { LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import SignInOAuthButton from './SignInOAuthButton';
import { useAuthStore } from '@/stores/useAuthStore';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

const TopBar = () => {
    const {isAdmin} = useAuthStore();
    console.log({isAdmin});
    return (
        <div className='flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10'>
            <div className='flex gap-2 items-center'>
                <img src= "/spotify.png"  className="size-8" alt="spotify-logo"/>
                Spotify
            </div>
            <div className='flex items-center gap-4'>
                {isAdmin && (
                    <Link to={"/admin"} className={cn(buttonVariants({variant : "outline"}))}>
                        <LayoutDashboard className="size-4 mr-2" />
                        Admin Dashboard
                    </Link>
                )}

                <SignedOut>
                    <SignInOAuthButton />
                </SignedOut>

                <UserButton />
            </div>
        </div>
    )
}

export default TopBar