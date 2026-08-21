export const GuestForm = () => {
    return (
        <form className="mt-8 space-y-8">
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="firstName" 
                        className="text-xs uppercase tracking-[0.1em]"
                    >
                        Förnamn
                    </label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        className="border-b border-charcoal/20 bg-transparent py-2 outline-none focus:border-black placeholder:text-charcoal/40"
                        placeholder="Anna"
                        required  
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="lastName" 
                        className="text-xs uppercase tracking-[0.1em]"
                    >
                        Efternamn
                    </label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        className="border-b border-charcoal/20 bg-transparent py-2 outline-none focus:border-black placeholder:text-charcoal/40"
                        placeholder="Karlsson"
                        required  
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="email" 
                    className="text-xs uppercase tracking-[0.1em]"
                >
                    Email
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="border-b border-charcoal/20 bg-transparent py-2 outline-none focus:border-black placeholder:text-charcoal/40"
                    placeholder="anna@example.com"
                    required 
                />
            </div>

            <div className="border-t border-charcoal/20 pt-6">
                <button 
                    type="submit" 
                    className="min-h-11 w-full bg-black px-6 text-xs uppercase tracking-[0.1em] text-cream cursor-pointer"
                >
                    Registrera gäst
                </button>
            </div>
        </form>
    );
};